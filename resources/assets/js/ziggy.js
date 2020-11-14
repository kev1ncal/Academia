    var Ziggy = {
        namedRoutes: {"home":{"uri":"\/","methods":["GET","HEAD"],"domain":null},"login":{"uri":"login","methods":["GET","HEAD"],"domain":null},"logout":{"uri":"logout","methods":["POST"],"domain":null},"register":{"uri":"register","methods":["GET","HEAD"],"domain":null},"password.request":{"uri":"password\/reset","methods":["GET","HEAD"],"domain":null},"password.email":{"uri":"password\/email","methods":["POST"],"domain":null},"password.reset":{"uri":"password\/reset\/{token}","methods":["GET","HEAD"],"domain":null},"password.update":{"uri":"password\/reset","methods":["POST"],"domain":null},"logOut":{"uri":"logout","methods":["GET","HEAD"],"domain":null},"page.about":{"uri":"about","methods":["GET","HEAD"],"domain":null},"page.contact":{"uri":"contact","methods":["GET","HEAD"],"domain":null},"instructor.view":{"uri":"instructor\/{instructor_slug}","methods":["GET","HEAD"],"domain":null},"course.view":{"uri":"course-view\/{course_slug}","methods":["GET","HEAD"],"domain":null},"course.list":{"uri":"courses","methods":["GET","HEAD"],"domain":null},"course.breadcurmb":{"uri":"course-breadcrumb","methods":["GET","HEAD"],"domain":null},"become.instructor":{"uri":"become-instructor","methods":["POST"],"domain":null},"instructor.list":{"uri":"instructors","methods":["GET","HEAD"],"domain":null},"contact.instructor":{"uri":"contact-instructor","methods":["POST"],"domain":null},"contact.admin":{"uri":"contact-admin","methods":["POST"],"domain":null},"blogs":{"uri":"blogs","methods":["GET","HEAD"],"domain":null},"blog.view":{"uri":"blog\/{blog_slug}","methods":["GET","HEAD"],"domain":null},"payment.form":{"uri":"payment-form","methods":["POST"],"domain":null},"payment.success":{"uri":"payment\/success","methods":["GET","HEAD"],"domain":null},"payment.failure":{"uri":"payment\/failure","methods":["GET","HEAD"],"domain":null},"payment.gcashForm":{"uri":"gcash-form","methods":["POST"],"domain":null},"course.checkout":{"uri":"checkout\/{course_slug}","methods":["GET","HEAD"],"domain":null},"payment.makePayment":{"uri":"payment\/payment-process","methods":["POST"],"domain":null},"payment.gcashmakePayment":{"uri":"payment\/gcash-payment-process","methods":["GET","HEAD"],"domain":null},"my.courses":{"uri":"my-courses","methods":["GET","HEAD"],"domain":null},"course.learn":{"uri":"course-learn\/{course_slug}","methods":["GET","HEAD"],"domain":null},"course.rate":{"uri":"course-rate","methods":["POST"],"domain":null},"delete.rating":{"uri":"delete-rating\/{raing_id}","methods":["GET","HEAD"],"domain":null},"instructor.dashboard":{"uri":"instructor-dashboard","methods":["GET","HEAD"],"domain":null},"instructor.profile.get":{"uri":"instructor-profile","methods":["GET","HEAD"],"domain":null},"instructor.profile.save":{"uri":"instructor-profile","methods":["POST"],"domain":null},"instructor.course.create":{"uri":"course-create","methods":["GET","HEAD"],"domain":null},"instructor.course.list":{"uri":"instructor-course-list","methods":["GET","HEAD"],"domain":null},"instructor.course.info":{"uri":"instructor-course-info","methods":["GET","HEAD"],"domain":null},"instructor.course.info.edit":{"uri":"instructor-course-info\/{course_id}","methods":["GET","HEAD"],"domain":null},"instructor.course.info.save":{"uri":"instructor-course-info-save","methods":["POST"],"domain":null},"instructor.course.delete":{"uri":"instructor-course-delete\/{course_id}","methods":["GET","HEAD"],"domain":null},"instructor.course.image":{"uri":"instructor-course-image","methods":["GET","HEAD"],"domain":null},"instructor.course.image.edit":{"uri":"instructor-course-image\/{course_id}","methods":["GET","HEAD"],"domain":null},"instructor.course.image.save":{"uri":"instructor-course-image-save","methods":["POST"],"domain":null},"instructor.course.video.edit":{"uri":"instructor-course-video\/{course_id}","methods":["GET","HEAD"],"domain":null},"instructor.course.video.save":{"uri":"instructor-course-video-save","methods":["POST"],"domain":null},"instructor.course.curriculum.edit":{"uri":"instructor-course-curriculum\/{course_id}","methods":["GET","HEAD"],"domain":null},"instructor.course.curriculum.save":{"uri":"instructor-course-curriculum-save","methods":["POST"],"domain":null},"instructor.credits":{"uri":"instructor-credits","methods":["GET","HEAD"],"domain":null},"instructor.withdraw.request":{"uri":"instructor-withdraw-request","methods":["POST"],"domain":null},"instructor.list.withdraw":{"uri":"instructor-withdraw-requests","methods":["GET","HEAD"],"domain":null},"admin.dashboard":{"uri":"admin\/dashboard","methods":["GET","HEAD"],"domain":null},"admin.users":{"uri":"admin\/users","methods":["GET","HEAD"],"domain":null},"admin.getForm":{"uri":"admin\/user-form","methods":["GET","HEAD"],"domain":null},"admin.saveUser":{"uri":"admin\/save-user","methods":["POST"],"domain":null},"admin.users.getData":{"uri":"admin\/users\/getData","methods":["GET","HEAD"],"domain":null},"admin.categories":{"uri":"admin\/categories","methods":["GET","HEAD"],"domain":null},"admin.categoryForm":{"uri":"admin\/category-form","methods":["GET","HEAD"],"domain":null},"admin.saveCategory":{"uri":"admin\/save-category","methods":["POST"],"domain":null},"admin.blogs":{"uri":"admin\/blogs","methods":["GET","HEAD"],"domain":null},"admin.blogForm":{"uri":"admin\/blog-form","methods":["GET","HEAD"],"domain":null},"admin.saveBlog":{"uri":"admin\/save-blog","methods":["POST"],"domain":null},"admin.withdraw.requests":{"uri":"admin\/withdraw-requests","methods":["GET","HEAD"],"domain":null},"admin.approve.withdraw.request":{"uri":"admin\/approve-withdraw-request\/{request_id}","methods":["GET","HEAD"],"domain":null},"admin.saveConfig":{"uri":"admin\/config\/save-config","methods":["POST"],"domain":null},"admin.pageHome":{"uri":"admin\/config\/page-home","methods":["GET","HEAD"],"domain":null},"admin.pageAbout":{"uri":"admin\/config\/page-about","methods":["GET","HEAD"],"domain":null},"admin.pageContact":{"uri":"admin\/config\/page-contact","methods":["GET","HEAD"],"domain":null},"admin.settingGeneral":{"uri":"admin\/config\/setting-general","methods":["GET","HEAD"],"domain":null},"admin.settingPayment":{"uri":"admin\/config\/setting-payment","methods":["GET","HEAD"],"domain":null},"admin.settingEmail":{"uri":"admin\/config\/setting-email","methods":["GET","HEAD"],"domain":null}},
        baseUrl: 'http://localhost:8000/',
        baseProtocol: 'http',
        baseDomain: 'localhost',
        basePort: 8000,
        defaultParameters: []
    };

    if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
        for (var name in window.Ziggy.namedRoutes) {
            Ziggy.namedRoutes[name] = window.Ziggy.namedRoutes[name];
        }
    }

    export {
        Ziggy
    }