import { messagesAndErrors } from "../globalCodeConfig/messagesAnderrors";
const errors = messagesAndErrors.speedsForLevelsSelector;

/**
 *
 * @param {string} selector
 * @param {[
 *   [number, number],
 *   [number, number],
 *   [number, number],
 *   [number, number],
 *   [number, number],
 *   [number, number],
 *   [number, number],
 *  ]} speedsData
 * @returns {[
 *   [number, number],
 *   [number, number],
 *   [number, number],
 *   [number, number],
 *   [number, number],
 *   [number, number],
 *   [number, number],
 *  ]}
 */
export function selectorOfSpeed(selector, speedsData) {
   if (!selector || !speedsData) throw Error(`${errors.missingArg}`);
   if (selector in speedsData) return speedsData[`${selector}`];

   throw Error(`${errors.badDifficultyKey}`);
}
