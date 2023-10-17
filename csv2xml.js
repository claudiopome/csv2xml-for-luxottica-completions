const fs = require('fs');
const csv = require('csv-parser');
const xmlbuilder = require('xmlbuilder');

const results = [];

// Read the CSV file and process it
fs.createReadStream('input.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    const xmlData = xmlbuilder.create('Products');
    
    results.forEach((row) => {
      const product = xmlData.ele('Product');
      product.ele('id').cdata(row.id);
      
      const descriptions = product.ele('descriptions');
      
      // Use a Set to store unique channels
      const uniqueChannels = new Set(row.channel.split('|').map(channel => channel.trim()));
      
      uniqueChannels.forEach((channel) => {
        descriptions.ele('description', { 
          channel: channel,
          lang: 'English',
          name: 'LongDescription'
        }).cdata(row.completion);
      });
    });

    // Save the XML to a file
    fs.writeFileSync('output.xml', xmlData.end({ pretty: true }));

    console.log('XML file "output.xml" has been created.');
  });
