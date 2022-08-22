// AppContextクラスを作成
export class AppContext {
  constructor({ lineClient, contentFileDownloader }) {
    this.lineClient = lineClient;
    this.contentFileDownloader = contentFileDownloader;
  }
}
