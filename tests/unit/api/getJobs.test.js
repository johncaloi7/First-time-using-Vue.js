import axios from "axios";

import getJobs from "@/api/getJobs";

vi.mock("axios");

describe("getJobs", () => {
  beforeEach(() => {
    axios.get.mockResolvedValue({
      data: [
        {
          id: 1,
          title: "Java Developer",
        },
      ],
    });
  });

  it("fetches jobs that candidate can apply for", async () => {
    await getJobs();
    expect(axios.get).toHaveBeenCalledWith("http://myfakeapi.com/jobs");
  });

  it("extracts jobs from responses", async () => {
    const jobs = await getJobs();
    expect(jobs).toEqual([{ id: 1, title: "Java Developer" }]);
  });
});
