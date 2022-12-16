# Exercise 11

## Chinese Numeral Encoder

Create a function that takes a Number as its argument and returns a Chinese numeral string. You don't need to validate the input argument, it will always be a Number in the range [-99999.999, 99999.999], rounded to 8 decimal places.

Simplified Chinese numerals have characters representing each number from 0 to 9 and additional numbers representing larger numbers like 10, 100, 1000, and 10000.

0 líng 零
1 yī 一
2 èr 二
3 sān 三
4 sì 四
5 wǔ 五
6 liù 六
7 qī 七
8 bā 八
9 jiǔ 九
10 shí 十
100 bǎi 百
1000 qiān 千
10000 wàn 万

Multiple-digit numbers are constructed by first the digit value (1 to 9) and then the place multiplier (such as 10, 100, 1000), starting with the most significant digit. A special case is made for 10 - 19 where the leading digit value (yī 一) is dropped. Note that this special case is only made for the actual values 10 - 19, not any larger values.

Trailing zeros are omitted, but interior zeros are grouped together and indicated by a single 零 character without giving the place multiplier.

Decimal numbers are constructed by first writing the whole number part, and then inserting a point (diǎn 点), followed by the decimal portion. The decimal portion is expressed using only the digits 0 to 9, without any positional characters and without grouping zeros.

Negative numbers are the same as other numbers, but add a 负 (fù) before the number.