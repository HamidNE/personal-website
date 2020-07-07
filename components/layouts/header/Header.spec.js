import { shallowMount } from '@vue/test-utils'
import Header from './Header.vue'

/* #region  Test setup */
const factory = () => {
	return shallowMount(Header)
}
/* #endregion */

describe('Header.vue', () => {
	let wrapper
	beforeEach(() => (wrapper = factory()))

	test('should mounts properly', () => {
		expect(wrapper.vm).toBeTruthy()
	})

	test.skip('should change fixed header when scrolled', () => {
		screen.height = 1000
		window.scrollY = 120
		wrapper.vm.handleScroll()
		expect(wrapper.vm.fixed).toBe(true)
	})
})
