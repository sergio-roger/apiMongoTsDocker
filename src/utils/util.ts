export class Utils { 

  public static getDirname = (path: string): string => {
    let dirname: string = path;
    dirname = dirname.replace('core', 'routes');
    return dirname;
  }

  /**
 * @param filename string
 * @description Limpia el nombre dejando de las extensiones
 * @return string | undefined
  */
  public static cleanFileName = (fileName: string) => {
    const file = fileName.split(".").shift();
    return file;
  };

}