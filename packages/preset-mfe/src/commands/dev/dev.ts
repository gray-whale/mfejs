import { chalk, logger } from "@mfejs/utils";
import { IApi } from "../../types";


export default (api: IApi) => {
  api.describe({
    enableBy() {
      return api.name === 'dev';
    },
  });

  api.registerCommand({
    name: 'dev',
    description: 'dev server for development',
    details: `
umi dev

# dev with specified port
PORT=8888 umi dev
`,
    async fn() {
      console.log('dev-----------------');


    },
  });
};
