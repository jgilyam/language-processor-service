import { LanguageModelInDTO, LanguageModelOutDTO } from "../../domain/dtos";
import { Message } from "../../domain/entities";
import { LanguageModelOperation } from "../../domain/enums";
import { ILanguageModelRepository } from "../../domain/interfaces";
import { LanguageModelMapper } from "../../domain/mappers";

export class LanguageModelService {
  constructor(private readonly languageModelRepository: ILanguageModelRepository, private readonly languageModelMapper: LanguageModelMapper) {}

  public async findAllLanguageModels(operation?: LanguageModelOperation): Promise<LanguageModelOutDTO[]> {
    const languageModelEntities = await this.languageModelRepository.findAll();
    return languageModelEntities.map((entity) => this.languageModelMapper.entityToOutDto(entity));
    
  }

  public findLanguageModelByOperation = async (operation?: LanguageModelOperation): Promise<LanguageModelOutDTO> => {
    const languageModelOutDTOClasificador: LanguageModelOutDTO = {
      id: "1",
      name: "Clasificador",
      description: "",
      chatCompletition: {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: "Eres un asistente clasificador de mensajes. Necesito clasificar según las siguientes categorias: ",
          },
          {
            role: "user",
            content: "Me procupa que las calles de la ciudad esten rotas",
          },
          {
            role: "assistant",
            content: "Infraestructura",
          },
          {
            role: "user",
            content: "Mi hijo lleva 20 dias sin ir al colegio por los paros",
          },
          {
            role: "assistant",
            content: "Salud",
          },
        ],
      },
      operation: LanguageModelOperation.MessageClassifier,
    };

    const languageModelOutDTOResponseGenerator: LanguageModelOutDTO = {
      id: "2",
      name: "Generador de respuestas",
      description: "",
      chatCompletition: {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "Eres el asistente de campaña de un candidato a gobernador de la Provicia de San Juan - Argentina. Eres respetuso, atento, educado y agredable. Debes responder mensajes en funcion de las siguientes propuetas usando menos de 40 palabras. Tienes que responder en potencial. ",
          },
        ],
      },
      operation: LanguageModelOperation.ResponseGenerator,
    };
    if (operation === LanguageModelOperation.ResponseGenerator) return languageModelOutDTOResponseGenerator;
    else return languageModelOutDTOClasificador;
  };
  public getSystemMessageByOperation = async (operation: LanguageModelOperation): Promise<Message> => {
    const languageModel = await this.languageModelRepository.findLanguageModelByOperation(LanguageModelOperation.ResponseGenerator);
    if(!languageModel) throw new Error("languageModel no existe")

    const { chatCompletition } = languageModel
    let { messages } = chatCompletition;
    const systemMessageIndex = messages.findIndex((message) => message.role === "system");

    return messages[systemMessageIndex];
  };

  public getMessagesAndAddCompletePrompt = async (intructionsAdded: string, languageModelOperation: LanguageModelOperation): Promise<Message[]> => {
    const languageModel = await this.languageModelRepository.findLanguageModelByOperation(languageModelOperation);
    if(!languageModel) throw new Error("languageModel no existe")
    
    const { chatCompletition } = languageModel
    let { messages } = chatCompletition;
    const systemMessageIndex = messages.findIndex((message) => message.role === "system");
    let newSystemMessage = messages[systemMessageIndex];
    newSystemMessage.content = newSystemMessage.content + intructionsAdded;
    messages[systemMessageIndex] = newSystemMessage;
    return messages;
  };
  public addLanguageModel = async (languageModelInDTO: LanguageModelInDTO): Promise<LanguageModelOutDTO> => {
    const topicEntity = this.languageModelMapper.inDtoToEntity(languageModelInDTO);
    const topicEntitySaved = await this.languageModelRepository.save(topicEntity);
    return this.languageModelMapper.entityToOutDto(topicEntitySaved);
  };
}
