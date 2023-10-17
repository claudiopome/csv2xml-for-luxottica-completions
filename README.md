# CSV2XML For Luxottica Completions
A simple tool to create a XML file from a CSV

## Tools used
- CSV Parser [https://www.npmjs.com/package/csv-parser]
- XML Builder [https://www.npmjs.com/package/xmlbuilder]

## Usage

The file accepts an ```input.csv```and generates an ```output.xml```

## Output
The output will be as follows 

```
<?xml version="1.0" encoding="UTF-8"?>
<Products>
  <Product>
    <id><![CDATA[0TF2160B__8055]]></id>
    <descriptions>
      <description channel="LC - Lens Crafters" lang="English" name="LongDescription"><![CDATA[Elevate your style and put on a pair of Tiffany & Co. TF2160B eyeglasses. The square shape, crafted from durable acetate material, is complemented by a polished black on tiffany blue color finish that adds a touch of elegance. The strass on strass metal components add a glamorous look to these eyeglasses. These eyeglasses are available with prescription lenses.]]></description>
    </descriptions>
  </Product>
</Products>
```
