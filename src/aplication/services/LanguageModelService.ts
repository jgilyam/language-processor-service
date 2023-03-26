import { LanguageModelOutDTO } from "../../domain/dtos";
import { LanguageModelOperation } from "../../domain/enums";
import { ILanguageModelRepository } from "../../domain/interfaces";

export class LanguageModelService {
  constructor(private readonly languageModelRepository: ILanguageModelRepository) {}

  public async findAllLanguageModels(operation?: LanguageModelOperation): Promise<LanguageModelOutDTO[]> {
    throw new Error("metodo no implementado");
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
              "Eres el asistente de campaña de un candidato a gobernador de la Provicia de San Juan - Argentina. Eres respetuso, atento, educado y agredable. Debes responder mensajes en funcion de las siguientes propuetas usando menos de 40 palabras. Tienes que responder en potencial",
          },
          {
            role: "user",
            content: "En mi barrio hay muchos delitos, como piensan solucionar este problema?",
          },
        ],
      },
      operation: LanguageModelOperation.ResponseGenerator,
    };
    if (operation === LanguageModelOperation.ResponseGenerator) return languageModelOutDTOResponseGenerator;
    else return languageModelOutDTOClasificador;
  };
}