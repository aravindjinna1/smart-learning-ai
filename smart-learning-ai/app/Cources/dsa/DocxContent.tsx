import ResourceCard from "./DocxCards";

const resources = [
{
  title: "DSA Notes",
  description: "Quick reference for common data structures and algorithms",
  icon: "📘",
  links: [
    { label: "Notes Part 1", url: "https://drive.google.com/file/d/0B48k2jhdQ5P2aVlmMFB1UUJLczA/edit" },
    { label: "Notes Part 2", url: "https://drive.google.com/file/d/1O7YbJgaadUTXryo9Yeuwl7RMyf7XeEZl/view" },
    { label: "Notes Part 3", url: "https://drive.google.com/file/d/17qRyJkDNQTsmDwQ0yzo33gj7YMPOXys-/view" },
    { label: "Notes Part 4", url: "https://drive.google.com/file/d/1YkD7hxvtzb7-IOU7xo4o7LSZyGYjNDJi/view" },
  ],
},

  {
    title: "DSA Notes 2 ",
    description: "Topic wise Explaination and Solutions",
    icon: "🐍",
    links: [ {
      label:"open sheet", url:"https://www.slideshare.net/slideshow/data-structure-notes-unit-1docx/262673533",
    }
    ]
},
  {
    title: "DSA Practice Sheet",
    description: "DSA Sheet - Most Important Interview Questions",
    icon: "🌐",
    links: [
    { label: "Open Sheet", url: "https://dsa.apnacollege.in/" },
  ],
  },
  {
    title: "TUF DSA Sheet",
    description: "Important and mostly asked DSA Questions from MNC's",
    icon: "⚛️",
    links:[
      {
        label:"open Resource", 
            url: "https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/",

      }
    ]
  },
  {
    title: "Cheat Sheet",
    description: "All in one resource shet",
    icon: "📄",
    links:[
      {
        label:"open Resource",
    url: "https://docs.google.com/spreadsheets/d/1C6A9y9b4TcKerBEnfs7mCChVph3xAlXa/edit?gid=1970548012#gid=1970548012",
      }
    ]
   

  },
  {
    title: "Interview Preparation Guide",
    description: "HR + technical interview preparation material",
    icon: "🎯",
    links:[
      {
        label:"open Resource",
        url: "https://drive.google.com/file/d/1vIxQDHMEm1FjxCuZo8FRFqsPvDBB6bao/view?usp=sharing",
      }
    ]
  
  },
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-[#0B0F19] px-8 py-12">

      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-white">
          Learning Resources
        </h1>
        <p className="text-gray-400 mt-2">
          Curated documents and notes to support your learning journey
        </p>
      </div>

      {/* Grid */}
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {resources.map((resource) => (
    <ResourceCard key={resource.title} {...resource} />
  ))}
</div>


    </div>
  );
}
