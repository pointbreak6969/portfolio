import { Skeleton } from "@/components/ui/skeleton"

export default function LoadingScreen() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6">
        <Skeleton className="h-6 w-20 bg-gray-800" />
        <div className="flex gap-6">
          <Skeleton className="h-9 w-16 rounded-full bg-gray-800" />
          <Skeleton className="h-6 w-16 bg-gray-800" />
          <Skeleton className="h-6 w-16 bg-gray-800" />
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center px-6 py-20 text-center">
        <Skeleton className="h-16 w-96 mb-6 bg-gray-800" />
        <div className="space-y-3 mb-8">
          <Skeleton className="h-4 w-80 mx-auto bg-gray-800" />
          <Skeleton className="h-4 w-60 mx-auto bg-gray-800" />
        </div>
        <Skeleton className="h-1 w-20 bg-gray-600" />
      </div>

      {/* About Me Section */}
      <div className="px-6 py-16">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Skeleton className="h-8 w-32 bg-gray-800" />
            <div className="space-y-4">
              <Skeleton className="h-4 w-full bg-gray-800" />
              <Skeleton className="h-4 w-full bg-gray-800" />
              <Skeleton className="h-4 w-3/4 bg-gray-800" />
            </div>
            <div className="space-y-4 pt-4">
              <Skeleton className="h-4 w-full bg-gray-800" />
              <Skeleton className="h-4 w-5/6 bg-gray-800" />
              <Skeleton className="h-4 w-4/5 bg-gray-800" />
            </div>
          </div>
          <div className="flex justify-center">
            <Skeleton className="h-80 w-80 rounded-lg bg-gray-800" />
          </div>
        </div>
      </div>

      {/* Skills & Technologies */}
      <div className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Skeleton className="h-8 w-64 mx-auto mb-8 bg-gray-800" />
            <div className="flex flex-wrap justify-center gap-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <Skeleton key={i} className="h-10 w-24 rounded bg-gray-800" />
              ))}
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="bg-gray-900 rounded-lg p-6 space-y-4">
                <Skeleton className="h-12 w-12 mx-auto bg-gray-800" />
                <Skeleton className="h-6 w-3/4 mx-auto bg-gray-800" />
                <div className="space-y-2">
                  <Skeleton className="h-3 w-full bg-gray-800" />
                  <Skeleton className="h-3 w-full bg-gray-800" />
                  <Skeleton className="h-3 w-2/3 bg-gray-800" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* My Portfolio */}
      <div className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Skeleton className="h-12 w-48 mx-auto mb-6 bg-gray-800" />
            <div className="space-y-3">
              <Skeleton className="h-4 w-96 mx-auto bg-gray-800" />
              <Skeleton className="h-4 w-64 mx-auto bg-gray-800" />
            </div>
            <Skeleton className="h-1 w-20 mx-auto mt-8 bg-gray-600" />
          </div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-gray-900 rounded-lg overflow-hidden">
                <Skeleton className="h-48 w-full bg-gray-800" />
                <div className="p-6 space-y-4">
                  <Skeleton className="h-6 w-3/4 bg-gray-800" />
                  <div className="space-y-2">
                    <Skeleton className="h-3 w-full bg-gray-800" />
                    <Skeleton className="h-3 w-5/6 bg-gray-800" />
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {Array.from({ length: 4 }).map((_, j) => (
                      <Skeleton key={j} className="h-6 w-16 rounded bg-gray-800" />
                    ))}
                  </div>
                  <div className="flex gap-3 pt-2">
                    <Skeleton className="h-8 w-20 bg-gray-800" />
                    <Skeleton className="h-8 w-16 bg-gray-800" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Get In Touch */}
      <div className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Skeleton className="h-12 w-64 mx-auto mb-6 bg-gray-800" />
            <Skeleton className="h-4 w-96 mx-auto bg-gray-800" />
            <Skeleton className="h-1 w-20 mx-auto mt-8 bg-gray-600" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mt-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <Skeleton className="h-8 w-40 bg-gray-800" />

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Skeleton className="h-6 w-6 bg-gray-800" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-16 bg-gray-800" />
                    <Skeleton className="h-4 w-32 bg-gray-800" />
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Skeleton className="h-6 w-6 bg-gray-800" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-16 bg-gray-800" />
                    <Skeleton className="h-4 w-32 bg-gray-800" />
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Skeleton className="h-6 w-6 bg-gray-800" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-20 bg-gray-800" />
                    <Skeleton className="h-4 w-28 bg-gray-800" />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <Skeleton className="h-6 w-24 bg-gray-800" />
                <div className="flex gap-3">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <Skeleton key={i} className="h-10 w-10 bg-gray-800" />
                  ))}
                </div>
              </div>

              <div className="bg-gray-900 rounded-lg p-6 space-y-4">
                <Skeleton className="h-6 w-32 bg-gray-800" />
                <div className="space-y-2">
                  <Skeleton className="h-3 w-full bg-gray-800" />
                  <Skeleton className="h-3 w-5/6 bg-gray-800" />
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-900 rounded-lg p-8 space-y-6">
              <Skeleton className="h-6 w-32 bg-gray-800" />

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Skeleton className="h-4 w-12 bg-gray-800" />
                  <Skeleton className="h-12 w-full bg-gray-800" />
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-4 w-12 bg-gray-800" />
                  <Skeleton className="h-12 w-full bg-gray-800" />
                </div>
              </div>

              <div className="space-y-2">
                <Skeleton className="h-4 w-16 bg-gray-800" />
                <Skeleton className="h-12 w-full bg-gray-800" />
              </div>

              <div className="space-y-2">
                <Skeleton className="h-4 w-16 bg-gray-800" />
                <Skeleton className="h-32 w-full bg-gray-800" />
              </div>

              <Skeleton className="h-12 w-full bg-gray-700" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
