import { MicroCMSQueries, createClient } from "microcms-js-sdk";

if (!process.env.CMS_API_KEY) {
    throw new Error("microCMSのAPIキーが設定されていません。");
}

type Porfolit = {

}

export const client = createClient({
    serviceDomain: 'bkqnualjm4',
    apiKey: process.env.CMS_API_KEY
})

export const fetchPortfolio = async (queries?: MicroCMSQueries) => {
    const data = await client.get({
      endpoint: 'portfolio',
      queries
    })

    console.log(data)

    return data
}