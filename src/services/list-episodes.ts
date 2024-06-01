import { PodcastTransferModel } from "../models/podcast-transfer-model";
import { repositoryPodcast } from "../repositories/podcast-repository";
import { statusCode } from "../utils/status-code";

export const serviceListEpisodes = async (): Promise<PodcastTransferModel> => {
  // Define contrato
  let responseFormat: PodcastTransferModel = {
    statusCode: 0,
    body: [],
  };
  // Busco os dados
  const data = await repositoryPodcast();

  // Verifica o tipo de resposta
  responseFormat = {
    statusCode: (responseFormat.statusCode =
      data.length !== 0 ? statusCode.OK : statusCode.NO_CONTENT),
    body: (responseFormat.body = data),
  };
  return responseFormat;
};
