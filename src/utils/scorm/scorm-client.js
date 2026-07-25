export function getScormClient() {
  if (typeof window === "undefined" || !window.CourseSCORM) {
    return null;
  }

  return window.CourseSCORM;
}

export function setScormLocation(location) {
  const client = getScormClient();

  if (!client || typeof client.setLocation !== "function") {
    return false;
  }

  return client.setLocation(location);
}

export function completeScormCourse() {
  const client = getScormClient();

  if (!client || typeof client.complete !== "function") {
    return false;
  }

  return client.complete();
}
