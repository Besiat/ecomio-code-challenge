import { Destination } from '../models/Destination';

export const getByCode = async (code: string): Promise<Destination | undefined> => {
  const response = await fetch(`http://localhost:8000/ecomiorestapi/destinations/${code}/`);
  if (!response.ok) {
    return;
  }

  const json = await response.json();
  return json as Destination;
};
