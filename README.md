# CSV2XML For Luxottica Completions
A simple tool to create a XML file from a CSV

## Tools used
- CSV Parser [https://www.npmjs.com/package/csv-parser]
- XML Builder [https://www.npmjs.com/package/xmlbuilder]

## Usage

The file accepts an ```input.csv``` and generates an ```output.xml```

From CLI run this command ```node csv2xml```

## Output
The output will be as follows 

```
<?xml version="1.0" encoding="UTF-8"?>
<Products>
  <Product>
    <id><![CDATA[0TF2160B__8055]]></id>
    <descriptions>
      <description channel="LC - Lens Crafters" lang="English" name="LongDescription"><![CDATA[A harmonious blend of sophistication and elegance, Tiffany & Co. TF2207 eyeglasses showcase the brand's commitment to excellence in design and quality. The polished black on tiffany blue frame, crafted from durable acetate, features a rectangle shape that adds a touch of sophistication to any look. These shades are not just stylish but also versatile, making them an excellent choice for everyday wear. These eyeglasses are available with prescription lenses.]]></description>
      <description channel="OPSM - OPSM" lang="English" name="LongDescription"><![CDATA[A harmonious blend of sophistication and elegance, Tiffany & Co. TF2207 eyeglasses showcase the brand's commitment to excellence in design and quality. The polished black on tiffany blue frame, crafted from durable acetate, features a rectangle shape that adds a touch of sophistication to any look. These shades are not just stylish but also versatile, making them an excellent choice for everyday wear. These eyeglasses are available with prescription lenses.]]></description>
      <description channel="SV - Salmoiraghi e Viganò" lang="English" name="LongDescription"><![CDATA[A harmonious blend of sophistication and elegance, Tiffany & Co. TF2207 eyeglasses showcase the brand's commitment to excellence in design and quality. The polished black on tiffany blue frame, crafted from durable acetate, features a rectangle shape that adds a touch of sophistication to any look. These shades are not just stylish but also versatile, making them an excellent choice for everyday wear. These eyeglasses are available with prescription lenses.]]></description>
      <description channel="GL - Glasses" lang="English" name="LongDescription"><![CDATA[A harmonious blend of sophistication and elegance, Tiffany & Co. TF2207 eyeglasses showcase the brand's commitment to excellence in design and quality. The polished black on tiffany blue frame, crafted from durable acetate, features a rectangle shape that adds a touch of sophistication to any look. These shades are not just stylish but also versatile, making them an excellent choice for everyday wear. These eyeglasses are available with prescription lenses.]]></description>
      <description channel="DC - David Clulow" lang="English" name="LongDescription"><![CDATA[A harmonious blend of sophistication and elegance, Tiffany & Co. TF2207 eyeglasses showcase the brand's commitment to excellence in design and quality. The polished black on tiffany blue frame, crafted from durable acetate, features a rectangle shape that adds a touch of sophistication to any look. These shades are not just stylish but also versatile, making them an excellent choice for everyday wear. These eyeglasses are available with prescription lenses.]]></description>
    </descriptions>
  </Product>
</Products>
```
