/**
 * Arma la URL de un archivo de /public respetando la base del build.
 * Con base './' funciona igual en localhost, en GitHub Pages y en un dominio propio.
 */
export const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
