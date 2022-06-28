import { post } from "../services/http.service";

const ENDPOINTEXE = '/api/execute'

export const executeCode = async({source_code, language_id}:{source_code:any, language_id:any}) => {
    return post(ENDPOINTEXE, {source_code: source_code, language_id: language_id})
    .then((response: any) => ({
      message: `Ejecutando!!!.`,
      value: response?.data,
      fullResponse: response,
    }))
    .catch((error: any) => {
      console.log(error)
    });
}