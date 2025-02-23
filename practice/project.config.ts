import{
Project,
PlaywrightTestOptions,
PlaywrightWorkerOptions

} from '@playwright/test'

type ProjectConfigType = Project<PlaywrightTestOptions,PlaywrightWorkerOptions>;

const practiceConfig: ProjectConfigType = {

name: 'practiceTests',
testDir: 'C:\Users\DELL\Desktop\Playwright\practice',
fullyParallel: true,
retries: 0,
use:{
    headless: false,
    screenshot: 'only-on-failure',
    browserName: 'webkit',
},


}
export default practiceConfig;