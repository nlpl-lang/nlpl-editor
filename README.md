# NLPL - Natural Language Programming Language

A research programming language aimed at using plain English as a programming language.
The goal is to try to make programming like writing a book.

At the beginning the development is focused on programs that can:
- Draw shapes and be animated
- Create graphs

**Not aimed as a General Purpose Language for now**.


## Main ideas


### Transform English to code

A simple parser will try to convert English sentences to code with the following steps:
The verb of the sentece will be the function that's going to be called. For the moment, if the sentence has no verb it's an error.
The other words are the parameters of the function. Articles, prepositions, and other words with no meaning will be ignored.
The _parameters_ are converted to a **Hash**. The keys are the categories of the words, the values are objects with the words and more information. The [hypernyms](https://en.wikipedia.org/wiki/Hyponymy_and_hypernymy) of a word are the candidates for the category (this is IMO the most complex problem to solve for the project, might need some heuristics).

For example the sentence:

```
Draw a red circle
```

Would get transformed to the code:

```
draw(color: 'red', shape: 'circle')
```

### Zero abstraction

The language will not have variables or functions.

### List of characters

This is the only abstract concept, the characters are like variables. When a character is introduced in a book, there's no need to describe it again. Their name is enough to refer to them again.

### Table of contents

Like a book you can have **Chapters**, **Titles**, **Headings** and **Paragraphs**. Only the Paragraphs are evaluated as code. The Chapters, Titles and Headings are meant for organization purposes.


## Future enhancements

- **Function names** might have a list of synonyms to call the function. It will have a _canonical name_ shown to the user.
- Nice error messages.
- Copy/paste should link the text, if any instance is modified the editor should offer to make the change in all places.


## Development

nlpl-editor uses nlpl-core that is not yet released in npm due to all the changes that it's still going through.

1. Get nlpl-core

```
$ git clone https://github.com/nlpl-lang/nlpl-core.git
```

2. Clone nlpl-editor

```
$ git clone https://github.com/nlpl-lang/nlpl-editor.git
```

3. Run the project (requires yarn & webpack installed)

```
$ cd nlpl-editor
$ yarn install
$ npm run start
```

4. Open [localhost:8080](localhost:8080)
