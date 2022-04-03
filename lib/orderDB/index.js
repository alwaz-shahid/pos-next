import { useQuery, useMutation, queryCache } from "react-query";

async function fetchSightingsRequest() {
  const response = await fetch("/api/sightings");
  const { sightings } = await response.json();

  return sightings.map((sighting) => ({
    id: sighting._id,
    longitude: sighting.location.coordinates[0],
    latitude: sighting.location.coordinates[1],
    createdAt: sighting.createdAt,
  }));
}

async function createSightingRequest(sightingData) {
  const response = await fetch("/api/sightings/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ sighting: sightingData }),
  });
  const data = await response.json();
  return data.sighting;
}

function useCreateSighting() {
  return useMutation(createSightingRequest, {
    onMutate: (sightingData) => {
      // 1) cancel queries
      queryCache.cancelQueries("sightings");

      // 2) save snapshot
      const snapshot = queryCache.getQueryData("sightings");

      // 3) optimistically update cache
      queryCache.setQueryData("sightings", (prev) => [
        ...prev,
        {
          id: new Date().toISOString(),
          longitude: sightingData.longitude,
          latitude: sightingData.latitude,
          createdAt: new Date().toISOString(),
        },
      ]);

      // 4) return rollback function which reset cache back to snapshot
      return () => queryCache.setQueryData("sightings", snapshot);
    },
    onError: (error, sightingData, rollback) => rollback(),
    onSettled: () => queryCache.invalidateQueries("sightings"),
  });
}
