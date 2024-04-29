import { client } from "../../utils/fetchClient";

const CLIENT_ID = 'qkhXO6S50eXAAFADTmbzmlJZikzMNYof1ArjNTdmUIc';


export function getImages() {
  return client.get(`/photos?client_id=${CLIENT_ID}`);
}