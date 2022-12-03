export class InternetExplorer {
  static fetch({ method, url, headers }) {
    headers = headers || { "Content-Type": "application/json" };
    try {
      return fetch(url, { method, headers }).then((response) =>
        response.json()
      );
    } catch (e) {
      console.log(
        "Sorry, something happened where we were getting data from " + url,
        e.toString()
      );
    }
  }

  static get(obj) {
    return InternetExplorer.fetch({ ...obj, method: "GET" });
  }

  static post(obj) {
    return InternetExplorer.fetch({ ...obj, method: "POST" });
  }
}
