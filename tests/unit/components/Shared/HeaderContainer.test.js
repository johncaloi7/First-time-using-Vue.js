import { screen, render } from "@testing-library/vue";

import HeaderContainer from "@/components/Shared/HeaderContainer.vue";

describe("HeaderContainer", () => {
  it("allows parent to provide title content", () => {
    render(HeaderContainer, {
      slots: {
        title: "<h2>Some Title</h2>",
      },
    });
    expect(screen.getByText("Some Title")).toBeInTheDocument();
  });

  it("allows parent to provide subtitle content", () => {
    render(HeaderContainer, {
      slots: {
        subtitle: "<h2>Work for us</h2>",
      },
    });
    expect(screen.getByText("Work for us")).toBeInTheDocument();
  });
});
