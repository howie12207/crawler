import {
    idInput,
    fetchVerifyCodeBtn,
    verifyCodeInput,
    agreeCheckbox,
    homeSubmitBtn,
    homeNextBtn,
} from "./utils/selector.js";
import checkStep from "./checkStep.js";

const ID_NUMBER = "C123456781";
const VERIFY_CODE = "00000";

export const homeTest = async (page) => {
    let now = 0;
    const calculateTime = (start = now) => {
        console.log(`${(new Date() - start) / 1000} s`);
    };

    await page.click(idInput);
    await page.keyboard.type(ID_NUMBER);

    now = new Date();
    await page.waitForSelector(fetchVerifyCodeBtn);
    calculateTime();
    await page.click(fetchVerifyCodeBtn);

    await page.click(verifyCodeInput);
    await page.keyboard.type(VERIFY_CODE);

    await page.click(agreeCheckbox);

    await page.click(homeSubmitBtn);

    // 這裡取不到 暫時以timeout
    // await page.waitForTimeout(1000);
    // await page.click(homeNextBtn);
    checkStep(page);
};
