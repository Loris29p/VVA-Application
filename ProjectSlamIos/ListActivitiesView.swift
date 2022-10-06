//
//  ListActivitiesView.swift
//  ProjectSlamIos
//
//  Created by Loris Poilly on 04/10/2022.
//

import UIKit

struct CategoryActivities {
    let name: String
    let description: String
    let duration: Int
    let hours: Int
    let date: String
    let users: [String]
    let max_users: Int
    let id_site: Int
    let id: Int
}

private let activities: [CategoryActivities] = [
    CategoryActivities(name: "Tournoi de foot", description: "Tournoi de foot au city, venez en tenue de sport avec de l'eau. Tournois de 3 équipes et des matchs de 10min max en deux points", duration: 60, hours: 12, date: "12/10/2022", users: [
        "1"
    ], max_users: 50, id_site: 1, id: 1),
    CategoryActivities(name: "Pétanque", description: "Tournoi de pétanque au terrain de boules, accompagner d'un concert, match en 10 points avec un apéro à la clé", duration: 120, hours: 18, date: "14/10/2022", users: [
        "1"
    ], max_users: 50, id_site: 1, id: 2),
    CategoryActivities(name: "Piscine", description: "Sortie piscine toute la journé à la piscine de Corbeil.", duration: 600, hours: 9, date: "13/10/2022", users: [
        "1"
    ], max_users: 50, id_site: 1, id: 3),
]

class ListActivitiesView: UIViewController, UITableViewDelegate, UITableViewDataSource, UIActionSheetDelegate {
    var nameVillage: String = ""
    var idVillage: Int = 0
    var noActivies: Bool = false
    var idActivitiesVillage: [Int] = []
    var activitiesPath: [Int] = []
    var countReload: Int = 0


    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        var count = 0
        for activity in activities {
            if activity.id_site == idVillage {
                count += 1
            }
        }
        if count == 0 {
            noActivies = true
            count = 1
        }
        return count
    }

    @objc func noActivitiesClicked() {
        let alert = UIAlertController(title: "Aucune activité", message: "Ce village ne possède aucune activité. Merci de vous renseigner au prêt du personnel du village.", preferredStyle: .alert)
        alert.addAction(UIAlertAction(title: "OK", style: .default, handler: nil))
        self.present(alert, animated: true)
    }

    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        print(activitiesPath.count)
        if noActivies {
            let cell = tableView.dequeueReusableCell(withIdentifier: "TableViewCell", for: indexPath)
            cell.textLabel?.text = "Aucunne activitées proposée"
            cell.accessoryType = .detailButton
            cell.backgroundColor = .secondarySystemGroupedBackground
            return cell
        } else {
            for activity in activities {
//                print(activity.id_site, idVillage, idActivitiesVillage.contains(activity.id))
                if activity.id_site == idVillage && !idActivitiesVillage.contains(activity.id) {
                    let cell = tableView.dequeueReusableCell(withIdentifier: "TableViewCell", for: indexPath)
                    cell.textLabel?.text = activity.name
                    cell.accessoryType = .disclosureIndicator
                    cell.backgroundColor = .secondarySystemGroupedBackground
                    idActivitiesVillage = idActivitiesVillage + [activity.id]
                    activitiesPath = activitiesPath + [activity.id]
                    return cell
                }
            }
        }
        return UITableViewCell()
    }

    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        if noActivies {
            self.noActivitiesClicked()
        } else {
            tableView.deselectRow(at: indexPath, animated: true)
            var idActivity = 0
            for id_activity in activitiesPath {
                if id_activity == activitiesPath[indexPath.row] {
                    idActivity = id_activity
                }
            }
            if idActivity != 0 {
                for activity in activities {
                    if activity.id == idActivity {
                        let vc = storyboard?.instantiateViewController(identifier: "DetailsActivity") as! DetailsActivity
                        vc.nameActivity = activity.name
                        vc.descriptionActivity = activity.description
                        vc.durationActivity = activity.duration
                        vc.hoursActivity = activity.hours
                        vc.dateActivity = activity.date
                        vc.usersActivity = activity.users
                        vc.maxUsersActivity = activity.max_users
                        vc.idSiteActivity = activity.id_site
                        present(vc, animated: true)
                    }
                }
            }
        }
        tableView.deselectRow(at: indexPath, animated: true)
    }

    @IBOutlet weak var LabelOnTop: UILabel!
    @IBOutlet weak var tableView: UITableView!

    override func viewDidLoad() {
        super.viewDidLoad()
        LabelOnTop.text! = nameVillage

        view.addSubview(tableView)

        tableView.register(UITableViewCell.self, forCellReuseIdentifier: "TableViewCell")
        tableView.layer.cornerRadius = 10
        tableView.dataSource = self
        tableView.delegate = self
    }

    @IBAction func ReturnToHomeClicked() {
        dismiss(animated: true)
    }

    @IBAction func UsersCircleClicked() {
        let optionMenu = UIAlertController(title: nil, message: "Choisissez une option", preferredStyle: .actionSheet)

        let connectACtion = UIAlertAction(title: "Se connecter", style: .default, handler: {
            (alert: UIAlertAction!) -> Void in
            print("connect")
        })
        
        let registerAction = UIAlertAction(title: "S'enregistrer", style: .default, handler: {
            (alert: UIAlertAction!) -> Void in
            print("register")
        })
        
        let cancelAction = UIAlertAction(title: "Retour", style: .cancel, handler: {
            (alert: UIAlertAction!) -> Void in
            print("back")
        })
        optionMenu.addAction(connectACtion)
        optionMenu.addAction(registerAction)
        optionMenu.addAction(cancelAction)
        self.present(optionMenu, animated: true, completion: nil)
    }
}
