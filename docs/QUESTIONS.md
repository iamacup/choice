# Question
***
The Question object determines which card template to render, and what properties it needs.
There are a number of different card options:
- SingleSelectWithPictureCard
- WhichCourseAreasQuestion
- SingleSelectCard
- MultiSelectCard
- WhichUniQuestion

These are card templates imported in from the components folder.

For each question there are some common keys:
```sh 
    id: 'STRING'

    size: 'STRING - either "standard" or "large"'

    card: 'VARIABLE - one of the mentioned card options above'

    priorityCard: 'BOOLEAN - default set to false - This tells us that this card will be an explainer card. The stylying will be different.'

    flashArrows: 'BOOLEAN - default set to false - when true the arrows will flash to attract the user.' 

    options: 'OBJECT - the options show what text to display based on the direction being swiped. So if there is not any text to be displayed the object will be empty. It will contain keys top/bottom/left/right depending on what direction the text is needed.'
        top/bottom/left/right: 'OBJECT - containing keys "text" and "initialWording"'
            text: 'STRING - the text displayed at the top of the screen when the card is moved'
            initialWording: 'STRING - the text displayed on the Toast box once swiped - this is optional'
```

and some keys subject to each card type:
```sh
    cardProps: 'OBJECT - keys include options/questionText/styleRatio/picture - all are optional'
        options: 'ARRAY - strings of options that will be displayed beside checkboxes, to be saved in the state'
        questionText: 'STRING - The question itself'
        picture: 'STRING of the image url - optional'
        styleRatio: 'OBJECT - with keys top/bottom - these set what flex position they will be'

    disabled: 'OBJECT - keys vertical/horizontal'
        vertical: 'BOOLEAN - on true the card cannot be swiped vertically',
        horizontal: 'BOOLEAN - on true the card cannot be swiped horizontally',
```

###### SingleSelectWithPictureCard
- cardProps property

###### WhichCourseAreasQuestion
- disabled property

###### SingleSelectCard
- cardProps property
  
###### MultiSelectCard
- cardProps property

###### WhichUniQuestion
- disabled property