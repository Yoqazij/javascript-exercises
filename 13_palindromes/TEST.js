    let string = "Ra, c3car!"
    const chars = string.split('');
    const filteredChars = chars.filter( chars => chars !==' ' && chars !== '.' && chars !== ',' && chars !== '!');
    const filteredString = filteredChars.join('').toLowerCase();
    const reversedString = filteredChars.reverse(); 
    const reversedJoinedString = reversedString.join('').toLowerCase();

    console.log(string);
    console.log(chars);
    console.log(filteredString)
    console.log(filteredChars);
    console.log(reversedString);
    console.log(reversedJoinedString);

