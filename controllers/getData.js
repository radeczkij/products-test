import { google } from "googleapis";

const auth = new google.auth.GoogleAuth({
  keyFile: "credentials.json",
  scopes: "https://www.googleapis.com/auth/spreadsheets",
});

const client = await auth.getClient();
const googleSheets = google.sheets({ version: "v4", auth: client });
const spreadsheetId = "1HJzKapn438dVT3vws2Ea7zG9FMmoKv8yE3GbQYvS6GU";

export const getGoogleSheetData = async () => {
  const response = await googleSheets.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range: "B4:Z18",
  });

  return response.data.values;
};

const getName = async () => {
  const response = await googleSheets.spreadsheets.values.get({
    spreadsheetId,
    range: `Nike Lebron, Jordan!B4:Z4`,
  });

  const values = response.data.values;
  const val = values.flat();
  return val.length;
};

export const configureProducts = async () => {
  const lengthRows = await getName();
  const data = await getGoogleSheetData();
  const arrayProduct = [];
  for (let i = 0; i < lengthRows; i++) {
    const product = {
      // list: data[0][i].split(" ").slice(0, 3).join(" "),
      name: data[0][i],
      price: data[1][i],
      articul: data[2][i],
      sizes: {
        36: data[4][i],
        37: data[5][i],
        38: data[6][i],
        39: data[7][i],
        40: data[8][i],
        41: data[9][i],
        42: data[10][i],
        43: data[11][i],
        44: data[12][i],
        45: data[13][i],
        46: data[14][i],
      },
    };
    arrayProduct.push(product);
  }
  return arrayProduct;
};
