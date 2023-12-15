import { mount } from '@vue/test-utils';
import CartComponent from '../components/CartComponent.vue'
import { expect, it, describe } from "vitest";

// Describe block to group your test cases
describe("CartComponent", () => {
  it("renders the component", async () => {
    const wrapper = mount(CartComponent);
    expect(wrapper.exists()).toBe(true);
  });

  // Add more test cases as needed
});
