/** Функция записывает профиль в localStorage */
function setProfile(profile, item) {
  localStorage.setItem(profile, JSON.stringify(item));
}

/** Функция возвращает профиль из localStorage */
function getProfile(item) {
  return JSON.parse(localStorage.getItem(item));
}

/** Функция удаляет профиль из localStorage */
function removeProfile(item) {
  localStorage.removeItem(item);
}
