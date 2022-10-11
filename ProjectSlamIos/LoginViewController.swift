//
//  LoginViewController.swift
//  ProjectSlamIos
//
//  Created by Loris Poilly on 11/10/2022.
//

import UIKit

class LoginViewController: UIViewController, UITextFieldDelegate {
    
    @IBOutlet weak var EmailTextField: UITextField!
    @IBOutlet weak var PasswordTextField: UITextField!
    
    @IBOutlet weak var SubmitButton: UIButton!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        PasswordTextField.isSecureTextEntry = true
        self.assignbackground()
        EmailTextField.becomeFirstResponder()
        EmailTextField.delegate = self
    }
    
    func assignbackground(){
        let background = UIImage(named: "background_login")

        var imageView : UIImageView!
        imageView = UIImageView(frame: view.bounds)
//        imageView.contentMode =  UIViewContentMode.ScaleAspectFill
        imageView.clipsToBounds = true
        imageView.image = background
        imageView.center = view.center
        view.addSubview(imageView)
        self.view.sendSubviewToBack(imageView)
    }
    
    @IBAction func Submit() {
        print( PasswordTextField.text!, EmailTextField.text!)
    }
    
    @IBAction func ClosePage() {
        dismiss(animated: true)
    }
}
