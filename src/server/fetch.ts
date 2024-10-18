"use server";

async function mockFetch(delay: number): Promise<string> {
  return new Promise((response) => {
    setTimeout(() => response("Fetch completed"), delay);
  });
}

async function failedFetch(): Promise<string> {
  return Promise.reject(new Error("Fetch failed"));
}

export { mockFetch, failedFetch };
