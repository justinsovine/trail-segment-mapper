<?php
header('Content-Type: application/json');

// path to GPX directory
$gpx_directory = __DIR__ . '/file';

// check if directory exists
if (!is_dir($gpx_directory)) {
    echo json_encode([
        'error' => 'Directory not found',
    ]);
    exit;
}

// get all files in directory
$files = array_filter(scandir($gpx_directory), function ($file) use ($gpx_directory) {
    $file_path = $gpx_directory . '/' . $file;
    return is_file($file_path) && pathinfo($file, PATHINFO_EXTENSION) === 'gpx';
});

// include relative urls
$files_with_urls = array_map(function ($file) {
    return '/file/' . $file;
}, $files);

// return the file list as JSON
echo json_encode(array_values($files_with_urls));