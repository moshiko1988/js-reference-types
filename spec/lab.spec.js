'use strict';

var paragraph =
  'We the People of the United States, in Order to form a more ' +
  'perfect Union, establish Justice, insure domestic Tranquility, ' +
  'provide for the common defence, promote the general Welfare, and ' +
  'secure the Blessings of Liberty to ourselves and our Posterity, ' +
  'do ordain and establish this Constitution for the United States ' +
  'of America.';

var collFuncs = require('../lib/lab.js');

describe('collections lab', function() {

  describe('normalized words', function() {

    var normalizedWords = [
      'a', 'among', 'and', 'and', 'and', 'another', 'assume', 'bands',
      'becomes', 'causes', 'connected', 'course', 'decent', 'declare',
      'dissolve', 'earth', 'entitle', 'equal', 'events', 'for', 'god',
      'have', 'human', 'impel', 'in', 'it', 'laws', 'mankind', 'nature',
      'nature\'s', 'necessary', 'of', 'of', 'of', 'of', 'of', 'one',
      'opinions', 'people', 'political', 'powers', 'requires',
      'respect', 'separate', 'separation', 'should', 'station', 'that',
      'the', 'the', 'the', 'the', 'the', 'the', 'the', 'the', 'the',
      'them', 'them', 'them', 'they', 'to', 'to', 'to', 'to', 'to',
      'when', 'which', 'which', 'which', 'with',
    ];

    it('has the correct length', function() {
      expect(collFuncs.getNormalizedWords(paragraph).length).toBe(71);
    });

    it('matches expected array', function() {
      expect(collFuncs.getNormalizedWords(paragraph).sort())
        .toEqual(normalizedWords.sort());
    });

  });

  describe('unique words', function() {

    var sortedUniqueWords = [
      'a', 'among', 'and', 'another', 'assume', 'bands', 'becomes',
      'causes', 'connected', 'course', 'decent', 'declare', 'dissolve',
      'earth', 'entitle', 'equal', 'events', 'for', 'god', 'have',
      'human', 'impel', 'in', 'it', 'laws', 'mankind', 'nature',
      'nature\'s', 'necessary', 'of', 'one', 'opinions', 'people',
      'political', 'powers', 'requires', 'respect', 'separate',
      'separation', 'should', 'station', 'that', 'the', 'them', 'they',
      'to', 'when', 'which', 'with',
    ];

    it('has the correct length', function() {
      expect(collFuncs.getUniqueWords(paragraph).length).toBe(49);
    });

    it('matches expected array', function() {
      expect(collFuncs.getUniqueWords(paragraph).sort())
        .toEqual(sortedUniqueWords);
    });

  });

  describe('word count', function() {

    it('has the correct word count', function() {
      expect(collFuncs.wordCount(paragraph)).toBe(71);
    });

    it('has the correct unique word count', function() {
      expect(collFuncs.wordCount(paragraph, true)).toBe(49);
    });

  });

});
