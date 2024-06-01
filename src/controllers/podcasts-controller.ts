import { IncomingMessage, ServerResponse } from "http";
import { serviceListEpisodes } from "../services/list-episodes";
import { serviceFilterEpisodes } from "../services/filter-episodes";
import { contentType } from "../utils/content-type";
import { PodcastTransferModel } from "../models/podcast-transfer-model";

const content_json = { "content-type": contentType.JSON };

export const getListEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const content: PodcastTransferModel = await serviceListEpisodes();

  res.writeHead(content.statusCode, content_json);
  res.write(JSON.stringify(content.body));

  res.end();
};

export const getFilterEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const content: PodcastTransferModel = await serviceFilterEpisodes(req.url);

  res.writeHead(content.statusCode, content_json);
  res.write(JSON.stringify(content.body));

  res.end();
};
