# Tree
***
The tree object shows the path that the questions/cards follow. Depending on what the `next` value is.

Properties on the tree object;

```sh
id: 'STRING - current question ID'
```

```sh
    next: 'STRING - next question ID'
    OR
    next: 'ARRAY of objects - keys include withAnswer and id'
        withAnswer: 'ARRAY of strings - answers that can be given'
        id: 'STRING - next question ID'
```
