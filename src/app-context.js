// AppContextクラスを作成
export class AppContext {
  constructor({ lineClient, contentFileDownloader, dynamoDBContext }) {
    this.lineClient = lineClient;
    this.contentFileDownloader = contentFileDownloader;
    this.dynamoDBContext = dynamoDBContext;
  }
}
