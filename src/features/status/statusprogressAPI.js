import { apiClient } from "@/app/api-client";

export const statusProgressApi = apiClient.injectEndpoints({
  endpoints: (builder) => ({
    getStatusTracker: builder.query({
      query: (docNo) => ({
        url: `/api/v2/status-tracker/${docNo}`,
        method: "GET",
      }),
      providesTags: ["status_tracker"],
    }),
  }),
});

export const { useGetStatusTrackerQuery } = statusProgressApi;
