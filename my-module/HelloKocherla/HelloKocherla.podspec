require "json"

package = JSON.parse(File.read(File.join(__dir__, "package.json")))

folly_compiler_flags = '-DFOLLY_NO_CONFIG -DFOLLY_MOBILE=1 -DFOLLY_USE_LIBCPP=1 -Wno-comma -Wno-shorten-64-to-32'

Pod::Spec.new do |s|
    s.name          = "HelloKocherla"
    s.version       = package["version"] 
    s.summary       = package["description"]
    s.homepage      = "https_placeholder_for_local_module"
    s.license       = package["license"]
    s.author        = { "Harsha Kocherla" => "kocherlaharsha09@gmail.com"}
    s.platforms     = { :ios => "13.0" }
    s.source        = { :git => "https://github.com/harshakocherla/AwesomeProject.git", :tag => "v#{s.version}" }

    s.source_files  = "ios/**/*.{h,m,mm}"

    # This is needed by React-Codegen
    s.dependency "React-Codegen" 
    s.dependency "React-Core" 

    s.pod_target_xcconfig = {
        "HEADER_SEARCH_PATHS" => "\"$(PODS_ROOT)\boost\"",
        "OTHER_CPLUSPLUSFLAGS" => "-DFB_SONARKIT_ENABLED=0 #{folly_compiler_flags}",
        "CLANG_CXX_LANGUAGE_STANDARD" => "c++17"
    }
end
