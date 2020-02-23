
export default class SearchController {

  
  
    async getShipInfo(imo){

        var url = "https://www.marinetraffic.com/en/ais/get_info_window_json?asset_type=ship&id="+imo;
        
        const response = await fetch(url,{

            method:"GET",
            headers:{
                "Content-Encoding":"gzip, deflate, br",
                "Accept": "*/*",
                "Vessel-Image": "00a53dc71c1cfa75036b6df18f3c812c3307",
                "Connection":"keep-alive",
                "referer":"https://www.marinetraffic.com/en/ais/home/centerx:28.996/centery:40.997/zoom:14",
                "Cookie":"__cfduid=dcce1f74b8c30a39b9cf0e2e8140799021581749741; _ga=GA1.2.436170991.1581749743; _hjid=90fcfb90-21eb-4f65-b2ef-fe66b9666583; __hstc=153128807.73869e66228164023ad4707db420d782.1581749751962.1582226856054.1582356679334.3; hubspotutk=73869e66228164023ad4707db420d782; _fbp=fb.1.1581749753065.1713516921; SERVERID=app8; _gid=GA1.2.367812225.1582356673; vTo=1; _cmpQcif3pcsupported=1; hsfirstvisit=; __hssrc=1; __hssc=153128807.2.1582356679334; mp_017900c581ab83839036748f85e0877f_mixpanel=%7B%22distinct_id%22%3A%20%2217047a1b32a452-0baa22ca8b38518-74276753-100200-17047a1b32c553%22%2C%22%24device_id%22%3A%20%2217047a1b32a452-0baa22ca8b38518-74276753-100200-17047a1b32c553%22%2C%22%24search_engine%22%3A%20%22google%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.google.com%2F%22%2C%22%24initial_referring_domain%22%3A%20%22www.google.com%22%7D; _gat=1",
                "Pragma":"no-cache",
            },
            
        });

        return await response.json();

      
        
    }
}