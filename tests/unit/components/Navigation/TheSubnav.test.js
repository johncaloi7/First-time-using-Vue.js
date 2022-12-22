import { render, screen } from "@testing-library/vue";

import TheSubnav from "@/components/Navigation/TheSubnav.vue";

describe("TheSubnav", () => {
  const renderTheSubnav = (routeName) => {
    render(TheSubnav, {
      global: {
        mocks: {
          $route: {
            name: routeName,
          },
        },
        stubs: {
          FontAwesomeIcon: true,
        },
      },
    });
  };

  describe("when user is on job page", () => {
    it("displays job count", () => {
      const routeName = "JobResults";
      renderTheSubnav(routeName);

      const jobCount = screen.getByText("2180");

      expect(jobCount).toBeInTheDocument();
    });
  });

  describe("when user is not on job page", () => {
    it("does not display job count", () => {
      const routeName = "Home";
      renderTheSubnav(routeName);

      const jobCount = screen.queryByText("2180");

      expect(jobCount).not.toBeInTheDocument();
    });
  });
});
