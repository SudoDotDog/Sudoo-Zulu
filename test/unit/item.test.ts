/**
 * @author WMXPY
 * @namespace ReferenceItem
 * @description Placeholder
 * @override Unit Test
 */

import { expect } from "chai";
import * as Chance from "chance";
import { NATOPhoneticAlphabetMap } from "../../src";

describe('Given (NATOPhoneticAlphabetMap) Map', (): void => {

    const chance: Chance.Chance = new Chance('zulu-nato');

    it('should be able get target value', (): void => {

        const a: string = NATOPhoneticAlphabetMap.A;

        expect(a).to.be.equal('Alpha');
    });
});
