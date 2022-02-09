function getParameters(components, needle) {
  const staticMatches = components.filter(component => component.url && component.url.indexOf(':') === -1);
  const dynamicMatches = components.filter(component => component.url && component.url.indexOf(':') > -1);
  needle = decodeURI(needle);

  // If the needle doesn't start with a /, or the needle is just a slash
  // we don't need to url
  if (!needle || needle[0] !== '/' || needle === '/') {
    return { url : needle, parameters : {} };
  }

  // First lets try to match the whole thing directly, if there is a url
  // we have the right one, when there is a direct url it is a fixed url
  let urls = staticMatches.filter(url => url.url === needle);
  if (urls.length > 1) {
    console.error(urls);
    throw new Error('Duplicate urls defined');
  } else if (urls.length === 1) {
    return { url : needle, parameters : {} };
  }

  // Lets find urls that have variable parts
  needle = needle.split('/');
  urls = dynamicMatches.filter(record => {
    const splitted = record.url.split('/');
    for (let i = 0; i < splitted.length; i++) {
      const needlePart = needle[i];
      const urlPart = splitted[i];
      const isParameter = urlPart[0] === ':';
      // The fixed parts don't line up, so it is not a url
      if (!isParameter && (needlePart !== urlPart)) {
        return false;
      }
    }
    return true;
  });

  // No urls found
  if (urls.length === 0) {
    return { url : needle, parameters : {} };
  }

  // The urled record
  const record = urls[0];

  let parameters = {};
  record.url.split('/').forEach((part, index) => {
    if (part[0] === ':') {
      const id = part.slice(1);
      parameters[id] = needle[index];
    }
  });

  return { url : record.url, parameters };
}

export default (...components) => {
  async function update(path) {
    window.history.pushState('', '', path);
    const { parameters, url } = getParameters(components, path);
    const matches = components.filter(component => (component.url === url || component.url === '*'));

    if (matches.length === 0 && typeof components.notFound === 'function') {
      console.error('Cannot find callback for: ', url);
      components.notFound();
      return;
    }

    try {
      for (let i = 0; i < matches.length; i++) {
        const { callback } = matches[i];
        if (typeof callback === 'function') {
          const response = await callback(update, parameters, components);
          if (response === 'exit') { break; }
        } else {
          components.notFound();
          console.error('Callback not found or not an function');
        }
      }
    } catch (errorMessage) {
      console.error(errorMessage);
      if (typeof components.error === 'function') {
        components.error(errorMessage);
      }
    }
  }

  return update;
};
