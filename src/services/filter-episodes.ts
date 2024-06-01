import { repositoryPodcast } from "../repositories/podcast-repository";
import { PodcastTransferModel } from "../models/podcast-transfer-model";
import { statusCode } from "../utils/status-code";

export const serviceFilterEpisodes = async (
  podcastName: string | undefined
): Promise<PodcastTransferModel> => {
  // Define a interface de retorno
  let responseFormat: PodcastTransferModel = {
    statusCode: 0,
    body: [],
  };
  // Buscando os dados
  const parameters = "?p=";
  const queryString = podcastName?.split(parameters)[1] || "";
  const data = await repositoryPodcast(queryString);

  // Verificando se tem conteúdo
  responseFormat = {
    statusCode: (responseFormat.statusCode =
      data.length !== 0 ? statusCode.OK : statusCode.NO_CONTENT),
    body: (responseFormat.body = data),
  };

  return responseFormat;
};
