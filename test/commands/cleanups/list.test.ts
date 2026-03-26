import { runCommand } from '@oclif/test'
import { expect } from 'chai'


describe('cleanups:list', () => {
  it('runs NoC', async () => {
    const { stdout } = await runCommand<{ name: string }>(['cleanups:noc'])
    expect(stdout).to.contain('-= NoC =-')
  }).timeout(15000)
})
