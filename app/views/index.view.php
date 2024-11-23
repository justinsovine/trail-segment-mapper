<!DOCTYPE html>
<html lang="en" class="h-full">

<head>
    <meta charset="UTF-8">
    <title>Trail Segment Mapper</title>
    <!-- Tailwind -->
    <script src="https://cdn.tailwindcss.com?plugins=forms"></script>
    
    <!-- Leaflet -->
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin="" />
    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=" crossorigin=""></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet-gpx/2.1.0/gpx.min.js" crossorigin=""></script>

    <link rel="stylesheet" href="/css/main.css" crossorigin="" />
</head>

<body class="h-full">
    <div class="min-h-full flex items-center justify-center">

        <main class="flex items-center justify-center min-h-screen">
            <div id="map" class="w-[90vw] h-[90vh]"></div>
        </main>

    </div>

    <script src="/js/main.js"></script>
</body>
</html>