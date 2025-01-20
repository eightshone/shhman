import { CONNECTION_REGEX } from "./consts";

function testConnectionString(connection: string) {
  return CONNECTION_REGEX.test(connection);
}

export default testConnectionString;
