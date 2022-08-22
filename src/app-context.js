// AppContextクラスを作成
export class AppContext {
  constructor(dynamoDBContext, lineClient, contentFileDownloader, s3Client) {
    this.dynamoDBContext = dynamoDBContext;
    this.lineClient = lineClient;
    this.contentFileDownloader = contentFileDownloader;
    this.s3Client = s3Client;
  }
}
