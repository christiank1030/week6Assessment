
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})


test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    await driver.sleep(1000)
    expect(displayed).toBe(true)
})

test('Clicking the draw button displays the users choices', async () => {
    await driver.findElement(By.id('draw')).click()
    const choices = await driver.findElement(By.id('choices'))
    const displayed = await choices.isDisplayed()
    await driver.sleep(1000)
    expect(displayed).toBe(true)
})

test('Clicking Add to Duo button displays the users duo', async () => {
    await driver.findElement(By.id('draw')).click()
    await driver.findElement(By.className('bot-btn')).click()
    const duo = await driver.findElement(By.id('player-duo'))
    const displayed = await duo.isDisplayed()
    await driver.sleep(1000)
    expect(displayed).toBe(true)
})

afterAll(async () => {
    driver.quit()
})